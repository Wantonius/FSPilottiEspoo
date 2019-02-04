package com.opiframe.android.twoactivities;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class DetailsActivity extends AppCompatActivity {

    private Button saveButton;
    private EditText type,price,count;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);
        type = findViewById(R.id.itemtype);
        price = findViewById(R.id.itemprice);
        count = findViewById(R.id.itemcount);
        saveButton = findViewById(R.id.savebutton);
        setResult(Activity.RESULT_CANCELED);
        saveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = getIntent();
                i.putExtra("type",type.getText().toString());
                i.putExtra("price",price.getText().toString());
                i.putExtra("count",count.getText().toString());
                setResult(Activity.RESULT_OK,i);
                finish();
            }
        });
    }
}
