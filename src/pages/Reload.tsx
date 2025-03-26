import React, { useState } from 'react';
import { CreditCard, Wallet, Calendar, Package } from 'lucide-react';

function Reload() {
  const [selectedProduct, setSelectedProduct] = useState<string>('trip-bundle');
  const [selectedZones, setSelectedZones] = useState<string>('A-C');
  const [quantity, setQuantity] = useState<number>(10);
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const zones = [
    { id: 'A-C', name: 'Zone A-C (Soweto - CBD)', price: 18.50 },
    { id: 'B-D', name: 'Zone B-D (Tembisa - Sandton)', price: 22.00 },
    { id: 'A-D', name: 'Zone A-D (All Zones)', price: 25.50 },
  ];

  const products = [
    {
      id: 'trip-bundle',
      name: 'Trip Bundle',
      description: 'Buy multiple trips at a discounted rate',
      icon: Package,
    },
    {
      id: 'daily-pass',
      name: 'Daily Pass',
      description: 'Unlimited trips for 24 hours',
      icon: Calendar,
    },
    {
      id: 'weekly-pass',
      name: 'Weekly Pass',
      description: 'Unlimited trips for 7 days',
      icon: Calendar,
    },
    {
      id: 'monthly-pass',
      name: 'Monthly Pass',
      description: 'Unlimited trips for 30 days',
      icon: Calendar,
    },
  ];

  const getProductPrice = () => {
    const basePrice = zones.find(z => z.id === selectedZones)?.price || 0;
    switch (selectedProduct) {
      case 'trip-bundle':
        return basePrice * quantity * 0.9; // 10% discount
      case 'daily-pass':
        return basePrice * 2.5;
      case 'weekly-pass':
        return basePrice * 14;
      case 'monthly-pass':
        return basePrice * 40;
      default:
        return 0;
    }
  };

  const handlePurchase = () => {
    console.log('Processing purchase:', {
      product: selectedProduct,
      zones: selectedZones,
      quantity,
      paymentMethod,
      totalAmount: getProductPrice(),
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Purchase Tickets</h2>

      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Product Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Product</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-colors ${
                  selectedProduct === product.id
                    ? 'border-navy-600 bg-navy-50 text-navy-600'
                    : 'border-gray-200 hover:border-navy-600'
                }`}
              >
                <product.icon className="h-5 w-5" />
                <div className="text-left">
                  <span className="font-medium">{product.name}</span>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Zone Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Zones</h3>
          <div className="space-y-3">
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setSelectedZones(zone.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${
                  selectedZones === zone.id
                    ? 'border-navy-600 bg-navy-50 text-navy-600'
                    : 'border-gray-200 hover:border-navy-600'
                }`}
              >
                <span>{zone.name}</span>
                <span className="font-medium">R {zone.price.toFixed(2)}/trip</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection (for Trip Bundles) */}
        {selectedProduct === 'trip-bundle' && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Number of Trips</h3>
            <div className="grid grid-cols-3 gap-4">
              {[10, 20, 40].map((num) => (
                <button
                  key={num}
                  onClick={() => setQuantity(num)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    quantity === num
                      ? 'border-navy-600 bg-navy-50 text-navy-600'
                      : 'border-gray-200 hover:border-navy-600'
                  }`}
                >
                  {num} Trips
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Payment Method */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-colors ${
                paymentMethod === 'card'
                  ? 'border-navy-600 bg-navy-50 text-navy-600'
                  : 'border-gray-200 hover:border-navy-600'
              }`}
            >
              <CreditCard className="h-5 w-5" />
              <span>Card</span>
            </button>
            <button
              onClick={() => setPaymentMethod('eft')}
              className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-colors ${
                paymentMethod === 'eft'
                  ? 'border-navy-600 bg-navy-50 text-navy-600'
                  : 'border-gray-200 hover:border-navy-600'
              }`}
            >
              <Wallet className="h-5 w-5" />
              <span>EFT</span>
            </button>
            <button
              onClick={() => setPaymentMethod('ussd')}
              className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-colors ${
                paymentMethod === 'ussd'
                  ? 'border-navy-600 bg-navy-50 text-navy-600'
                  : 'border-gray-200 hover:border-navy-600'
              }`}
            >
              <Package className="h-5 w-5" />
              <span>USSD</span>
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Product</span>
            <span className="font-semibold">{
              products.find(p => p.id === selectedProduct)?.name
            }</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Zones</span>
            <span className="font-semibold">{selectedZones}</span>
          </div>
          {selectedProduct === 'trip-bundle' && (
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Number of Trips</span>
              <span className="font-semibold">{quantity}</span>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-navy-600">
              R {getProductPrice().toFixed(2)}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handlePurchase}
          className="w-full bg-navy-600 text-white py-4 rounded-lg font-semibold hover:bg-navy-700 transition-colors"
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
}

export default Reload;