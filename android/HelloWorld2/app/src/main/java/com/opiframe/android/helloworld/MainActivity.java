package com.opiframe.android.helloworld;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    private static final String TAG = "MainActivity";
    private TextView hellotext;
    private Button helloButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        hellotext = findViewById(R.id.hellotext);
        helloButton = findViewById(R.id.hellobutton);
        helloButton.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        hellotext.setText("Hello World!");
    }
}
