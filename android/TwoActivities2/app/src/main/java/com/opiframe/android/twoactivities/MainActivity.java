package com.opiframe.android.twoactivities;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private Button detailsButton;
    private Button otherButton;
    private EditText longitude, latitude;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        detailsButton = findViewById(R.id.detailsbutton);
        otherButton = findViewById(R.id.showmebutton);
        longitude = findViewById(R.id.longitude);
        latitude = findViewById(R.id.latitude);
        detailsButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(MainActivity.this, DetailsActivity.class);
                startActivityForResult(i,100);
            }
        });
        otherButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String longi="0.0";
                String lati="0.0";
                longi = longitude.getText().toString();
                lati = latitude.getText().toString();
                String temp = String.format("geo:%s,%s?z=16",lati,longi);
                Uri mapUri = Uri.parse(temp);
                Intent i = new Intent();
                i.setAction(Intent.ACTION_VIEW);
                i.setData(mapUri);
                startActivity(i);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if(requestCode == 100) {
            if(resultCode == Activity.RESULT_OK) {
                Toast.makeText(this,""+data.getStringExtra("type")+", price:"+data.getStringExtra("price")
                        +", count:"+data.getStringExtra("count"),Toast.LENGTH_LONG).show();
            }
        }
    }
}
