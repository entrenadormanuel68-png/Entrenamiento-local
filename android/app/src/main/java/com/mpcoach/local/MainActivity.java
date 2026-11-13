package com.mpcoach.local;

import android.webkit.WebSettings;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onStart() {
        super.onStart();
        // La app no agranda la letra con el tamaño de fuente del sistema: se ve igual que la web.
        try {
            WebSettings ajustes = getBridge().getWebView().getSettings();
            ajustes.setTextZoom(100);
        } catch (Exception e) {
            // si no se puede ajustar, la app funciona igual
        }
    }
}
