import { housingListings, listingExtras, getListing as getDemoListing } from '../data/dummyData';
import { daysLeft, isExpired, loadPostedListings, relativePosted, savePostedListings } from './storage';

export function hydrateDemo(listing) {
  const extra = listingExtras[listing.id] || {};
  return {
    ...listing,
    ...extra,
    source: 'demo',
    expiresInDays: extra.expiresInDays ?? 30,
    unitsAvailable: extra.unitsAvailable || 1,
    contactMethods: extra.contactMethods || ['call', 'whatsapp'],
    city: extra.city || 'Nairobi'
  };
}

export function getAllListings() {
  const posted = loadPostedListings()
    .filter((item) => !isExpired(item))
    .map((item) => ({
      ...item,
      posted: relativePosted(item),
      expiresInDays: daysLeft(item),
      image: item.photos?.[0] || item.image
    }));
  return [...posted, ...housingListings.map(hydrateDemo)];
}

export function getListingById(id) {
  const posted = loadPostedListings().find((item) => String(item.id) === String(id));
  if (posted) {
    return {
      ...posted,
      posted: relativePosted(posted),
      expiresInDays: daysLeft(posted),
      image: posted.photos?.[0] || posted.image,
      expired: isExpired(posted)
    };
  }
  return getDemoListing(id);
}

export function addListing(listing) {
  const listings = loadPostedListings();
  listings.unshift(listing);
  savePostedListings(listings);
  return listing;
}

export function updateListing(id, patch) {
  const listings = loadPostedListings().map((item) => (
    String(item.id) === String(id) ? { ...item, ...patch } : item
  ));
  savePostedListings(listings);
}

export function bumpViews(id) {
  const posted = loadPostedListings().find((item) => String(item.id) === String(id));
  if (posted) updateListing(id, { views: (posted.views || 0) + 1 });
}

export function bumpInquiries(id) {
  const posted = loadPostedListings().find((item) => String(item.id) === String(id));
  if (posted) updateListing(id, { inquiries: (posted.inquiries || 0) + 1 });
}
