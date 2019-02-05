package com.opiframe.android.adapterviewexample;

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
                float tempprice = 0.0f;
                int tempcount = 0;
                try {
                    tempprice = Float.parseFloat(price.getText().toString());
                    tempcount = Integer.parseInt(count.getText().toString());
                } catch (NumberFormatException e)  {
                    return;
                }
                i.putExtra("type",type.getText().toString());
                i.putExtra("price",tempprice);
                i.putExtra("count",tempcount);
                setResult(Activity.RESULT_OK,i);
                finish();
            }
        });
    }
}
