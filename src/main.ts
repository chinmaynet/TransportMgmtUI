/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


   // onProductSelectionChange() {
  //   console.log('Selected Product ID:', this.selectedProductName);
  //   console.log('Product Names:', this.productNames);

  //   // Find the selected product in the productNames array
  //   const selectedProduct = this.productNames.find(
  //     (product) => product.productName === this.selectedProductName
  //   );

  //   console.log('Selected Product:', selectedProduct);

  //   if (selectedProduct) {
  //       // Update the selected product description
  //       this.selectedProductDescription = selectedProduct.productDescription;

  //       this.addInstructionRequest.ProductCode = selectedProduct.productId;

  //       this.addInstructionRequest.ProductDescription = this.selectedProductDescription;
  //   } else {
  //       // Handle the case where no product was found (optional)
  //       console.log('No product found for the selected ID.');
  //   }

  //   console.log('addInstructionRequest:', this.addInstructionRequest.ProductDescription);
  // }


   // onProductSelectionChange() {
  //   console.log('Selected Product ID:', this.selectedProductId);
  //   console.log('Selected Products:', this.productNames);

  //   // Find the selected product in the productNames array
  //   for (const product of this.productNames) {
  //     console.log('Product ID in Array:', product.productId);
  //     console.log('Type of Product ID:', typeof product.productId);
  //     console.log('Type of selectedProductId:', typeof this.selectedProductId);

  //     if (product.productId === Number(this.selectedProductId)) {
  //       console.log('Selected Product:', product);

  //       // Update the selected product description
  //       this.selectedProductDescription = product.productDescription;

  //       this.addInstructionRequest.ProductCode = product.productId;

  //       // Update the addInstructionRequest's ProductDescription field
  //       this.addInstructionRequest.ProductDescription = this.selectedProductDescription;

  //       return; // Exit the loop since we found the product
  //     }
  //   }

  //   // Handle the case where no product was found (optional)
  //   console.log('No product found for the selected ID.');
  //   this.selectedProductDescription = ''; // Clear the description if no product is found
  // }


    // isAddInstructionButtonEnabled(): boolean {
  //   // Check if both Product Code and Product Description are filled
  //   return (
  //     !!this.addInstructionRequest.Instruction.InstructionDate &&
  //     !!this.addInstructionRequest.Instruction.ClientList &&
  //     !!this.addInstructionRequest.Instruction.PickupAddress &&
  //     !!this.addInstructionRequest.Instruction.DeliveryAddress
  //   );
  // }