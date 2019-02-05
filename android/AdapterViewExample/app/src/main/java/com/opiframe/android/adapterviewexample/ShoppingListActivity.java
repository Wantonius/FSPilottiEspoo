package com.opiframe.android.adapterviewexample;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

import java.util.List;

public class ShoppingListActivity extends AppCompatActivity {

    private ListView lw;
    private Button addButton;
    private ShoppingListAdapter adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shopping_list);
        lw = findViewById(R.id.lw);
        addButton = findViewById(R.id.addbutton);
        adapter = new ShoppingListAdapter(this,0,0);
        lw.setAdapter(adapter);
        addButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ShoppingListActivity.this,DetailsActivity.class);
                startActivityForResult(i,100);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if(requestCode == 100) {
            if(resultCode == Activity.RESULT_OK) {
                ShoppingItem temp = new ShoppingItem();
                temp.setCount(data.getIntExtra("count",0));
                temp.setPrice(data.getFloatExtra("price",0.0f));
                temp.setType(data.getStringExtra("type"));
                adapter.add(temp);
            }
        }
    }

    private class ShoppingListAdapter extends ArrayAdapter<ShoppingItem> {

        public ShoppingListAdapter(@NonNull Context context, int resource) {
            super(context, resource);
        }

        public ShoppingListAdapter(@NonNull Context context, int resource, int textViewResourceId) {
            super(context, resource, textViewResourceId);
        }

        public ShoppingListAdapter(@NonNull Context context, int resource, @NonNull ShoppingItem[] objects) {
            super(context, resource, objects);
        }

        public ShoppingListAdapter(@NonNull Context context, int resource, int textViewResourceId, @NonNull ShoppingItem[] objects) {
            super(context, resource, textViewResourceId, objects);
        }

        public ShoppingListAdapter(@NonNull Context context, int resource, @NonNull List<ShoppingItem> objects) {
            super(context, resource, objects);
        }

        public ShoppingListAdapter(@NonNull Context context, int resource, int textViewResourceId, @NonNull List<ShoppingItem> objects) {
            super(context, resource, textViewResourceId, objects);
        }

        @NonNull
        @Override
        public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
            if(convertView == null) {
                convertView = getLayoutInflater().inflate(R.layout.shoppinglist_row_layout,null);
            }
            TextView count = convertView.findViewById(R.id.countinrow);
            TextView type = convertView.findViewById(R.id.typeinrow);
            TextView price = convertView.findViewById(R.id.priceinrow);
            ShoppingItem temp = adapter.getItem(position);
            count.setText(""+temp.getCount());
            type.setText(""+temp.getType());
            price.setText(""+temp.getPrice()+"€");
            return convertView;
        }
    }
}
