package ke.kejascans.app;

import android.annotation.SuppressLint;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @SuppressLint("SetJavaScriptEnabled")
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView webView = getBridge().getWebView();
        prepareWebView(webView);
        webView.addJavascriptInterface(new TvBridge(), "KejaNative");
        webView.requestFocus(View.FOCUS_DOWN);

        if (isTelevision()) {
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
            injectTvFlag();
            webView.postDelayed(this::injectTvFlag, 400);
            webView.postDelayed(this::injectTvFlag, 1400);
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        WebView webView = getBridge().getWebView();
        webView.requestFocus(View.FOCUS_DOWN);
        if (isTelevision()) {
            injectTvFlag();
        }
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        WebView webView = getBridge().getWebView();
        int code = event.getKeyCode();
        if (isDpad(code) && !webView.hasFocus()) {
            webView.requestFocus();
        }
        if (code == KeyEvent.KEYCODE_BACK && event.getAction() == KeyEvent.ACTION_DOWN && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.dispatchKeyEvent(event);
    }

    private void prepareWebView(WebView webView) {
        webView.setFocusable(true);
        webView.setFocusableInTouchMode(true);
        webView.setOverScrollMode(View.OVER_SCROLL_IF_CONTENT_SCROLLS);
        webView.getSettings().setNeedInitialFocus(true);
        webView.getSettings().setUseWideViewPort(true);
        webView.getSettings().setLoadWithOverviewMode(true);
    }

    private boolean isDpad(int keyCode) {
        return keyCode == KeyEvent.KEYCODE_DPAD_UP
            || keyCode == KeyEvent.KEYCODE_DPAD_DOWN
            || keyCode == KeyEvent.KEYCODE_DPAD_LEFT
            || keyCode == KeyEvent.KEYCODE_DPAD_RIGHT
            || keyCode == KeyEvent.KEYCODE_DPAD_CENTER
            || keyCode == KeyEvent.KEYCODE_ENTER
            || keyCode == KeyEvent.KEYCODE_NUMPAD_ENTER;
    }

    boolean isTelevision() {
        int uiMode = getResources().getConfiguration().uiMode & Configuration.UI_MODE_TYPE_MASK;
        PackageManager pm = getPackageManager();
        return uiMode == Configuration.UI_MODE_TYPE_TELEVISION
            || pm.hasSystemFeature(PackageManager.FEATURE_LEANBACK)
            || pm.hasSystemFeature("android.hardware.type.television");
    }

    private void injectTvFlag() {
        getBridge().getWebView().evaluateJavascript(
            "window.__KEJA_TV=true;document.documentElement.classList.add('tv-mode');"
                + "if(document.body)document.body.classList.add('tv-mode');"
                + "window.dispatchEvent(new Event('keja-tv'));",
            null
        );
    }

    public class TvBridge {
        @JavascriptInterface
        public boolean isTv() {
            return isTelevision();
        }
    }
}
