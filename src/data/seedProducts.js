const names = [
  ['Dungar Printed Co-ord Set', 'Dungar Edit', 'Rayon Blend', 'Daily Wear', ['S', 'M', 'L', 'XL']],
  ['Royal Zari Silk Saree', 'Sarees', 'Silk', 'Wedding', ['S', 'M', 'L', 'Free Size']],
  ['Pink Anarkali Suit Set', 'Suit Sets', 'Georgette', 'Festive', ['S', 'M', 'L', 'XL']],
  ['Printed Cotton Kurti', 'Kurtis', 'Cotton', 'Daily Wear', ['S', 'M', 'L', 'XL']],
  ['Velvet Wedding Lehenga', 'Lehengas', 'Velvet', 'Wedding', ['S', 'M', 'L']],
  ['Sequin Evening Gown', 'Gowns', 'Net', 'Party', ['S', 'M', 'L', 'XL']],
  ['Chiffon Embellished Dupatta', 'Dupatta Collection', 'Chiffon', 'Festive', ['Free Size']],
  ['Daily Straight Kurta Set', 'Kurtis', 'Rayon', 'Daily Wear', ['S', 'M', 'L', 'XL', 'XXL']],
  ['Banarasi Woven Saree', 'Sarees', 'Banarasi Silk', 'Festive', ['Free Size']],
  ['Floral Sharara Suit', 'Suit Sets', 'Organza', 'Festive', ['S', 'M', 'L']],
];

const colors = ['Pink', 'Coral', 'Mustard', 'Ivory', 'Black', 'Emerald', 'Navy', 'Teal'];

const products = Array.from({ length: 30 }, (_, index) => {
  const base = names[index % names.length];
  const price = 899 + (index % 9) * 420;
  const originalPrice = price + 700 + (index % 5) * 350;
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);

  return {
    id: `pehnawa-product-${index + 1}`,
    slug: `${base[0].toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index + 1}`,
    name: `${base[0]} ${index > 9 ? 'Premium' : ''}`.trim(),
    brand: 'Pehnawa Collection Dungar',
    category: base[1],
    subCategory: base[3],
    price,
    originalPrice,
    discountPercentage,
    rating: Number((4.1 + (index % 8) / 10).toFixed(1)),
    numReviews: 44 + index * 18,
    sizes: base[4],
    colors: [colors[index % colors.length], colors[(index + 3) % colors.length]],
    fabric: base[2],
    occasion: base[3],
    stock: 3 + (index % 18),
    sku: `PCD-${String(index + 1).padStart(4, '0')}`,
    tags: [base[1], base[3], index % 2 ? 'Best Seller' : 'New Arrival'],
    careInstructions: 'Dry clean recommended. Store in a cool dry place.',
    returnPolicy: 'Easy 7 day return or exchange on unused products.',
    description: 'Fresh Pehnawa Collection Dungar fashion piece crafted for confident festive and everyday styling.',
    isFeatured: index % 3 === 0,
    isNewArrival: index % 4 === 0,
    isBestSeller: index % 5 === 0,
    isActive: true,
  };
});

export default products;
