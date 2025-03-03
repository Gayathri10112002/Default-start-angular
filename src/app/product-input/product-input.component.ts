import { Component } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ivdssecobaflwqyievxx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2ZHNzZWNvYmFmbHdxeWlldnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MzQ0MDEsImV4cCI6MjAyNjQxMDQwMX0.AspPNVvFryDILKQTa21DbyFuTDU5d_9t7gYlrQu9uhY';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent {
  productName: string = '';
  quantity: string = '';
  specification: string = '';
  otherProductName: string = '';
  otherVendorName: string = '';
  vendorName: string = '';
  showOtherProduct: boolean = false;
  showOtherVendor: boolean = false;

  productOptions: string[] = ['Nickel', 'Copper', 'CO2 gas'];
  vendorOptions: string[] = ['SNR Alloys', 'Premium alloys', 'Ni & Cu materials'];

  onProductChange() {
    this.showOtherProduct = this.productName === 'Other';
    if (!this.showOtherProduct) {
      this.otherProductName = ''; // Clear other product name if not selected
    }
  }

  onVendorChange() {
    this.showOtherVendor = this.vendorName === 'Other';
    if (!this.showOtherVendor) {
      this.otherVendorName = ''; // Clear other vendor name if not selected
    }
  }

  onSubmit() {
    const formData = {
      product_name: this.productName === 'Other' ? this.otherProductName : this.productName,
      quantity: this.quantity,
      specification: this.specification,
      vendor_name: this.vendorName === 'Other' ? this.otherVendorName : this.vendorName,
      other_product_name: this.otherProductName,
      other_vendor_name: this.otherVendorName
    };
  
    supabase.from('product').insert(formData)
      .then(({ data, error }) => {
        if (error) {
          console.error('Error storing data:', error);
        } else {
          console.log('Data stored successfully!', data);
          // Reset form or perform any other necessary actions
        }
      })
      //.catch(console.error);
  }
}