// quotation.component.ts

import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';


@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  quotations: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.loadQuotations();
  }

  loadQuotations() {
    // Fetch data from Supabase
    // Implement this according to your Supabase setup
    // Example: this.supabaseService.fetchQuotations().subscribe(data => this.quotations = data);
  }
}
