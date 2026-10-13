import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Star,
  ShoppingBag,
  Eye,
  X,
  Plus,
  Minus,
  CheckCircle2,
  Truck,
  ShieldCheck
} from "lucide-react";
import { PRODUCTS, Product, ProductVariant } from "../data/products";
import { useCart } from "../context/CartContext";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const ShopPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Quick view variant and quantity selection
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);
  const [quickViewQty, setQuickViewQty] = useState(1);

  const { addItem } = useCart();

  const categories = [
    "All",
    "Roof Coatings & Paint",
    "Bedding & Pointing",
    "Tiles & Ridge Capping",
    "Flashing & Sealants",
    "Gutters & Accessories",
    "Tools & Safety"
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesStock = !inStockOnly || p.inStock;
      return matchesSearch && matchesCategory && matchesStock;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      // Default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, inStockOnly, sortBy]);

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setSelectedVariant(product.variants ? product.variants[0] : undefined);
    setQuickViewQty(1);
  };

  const handleQuickViewAdd = () => {
    if (!quickViewProduct) return;
    addItem(quickViewProduct, quickViewQty, selectedVariant);
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Breadcrumbs Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Roofing Supplies Shop" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F1F1F] rounded-full text-xs font-semibold text-[#D7192A]">
            <Truck className="w-3.5 h-3.5" />
            <span>Melbourne Metro Delivery & Bundoora Click & Collect</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5]">
            Roofing Supplies. Trade Quality.
          </h1>

          <p className="text-sm sm:text-base text-[#8A8A8A] max-w-2xl mx-auto">
            The exact same commercial acrylic membranes, AS 2050 flexible pointing compounds, replacement tiles, and fall-safety kits our tradesmen use on-site every day.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-[#8A8A8A]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D7192A]" />
              <span>Free Delivery Over $300 AUD</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D7192A]" />
              <span>All Prices Include 10% Australian GST</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#D7192A]" />
              <span>Next-Day Metro Dispatch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Search & Filter Bar */}
        <div className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-4 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#8A8A8A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search paint, pointing, tiles, harnesses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort & Quick Stock Filter */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
              <label className="flex items-center gap-2 text-xs text-[#8A8A8A] cursor-pointer bg-[#0A0A0A] px-3 py-2 rounded-lg border border-[#1F1F1F]">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-[#D7192A] rounded"
                />
                <span>In Stock Only</span>
              </label>

              <div className="flex items-center gap-2 text-xs bg-[#0A0A0A] px-3 py-2 rounded-lg border border-[#1F1F1F]">
                <span className="text-[#8A8A8A]">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[#F5F5F5] focus:outline-none font-medium cursor-pointer"
                >
                  <option value="featured" className="bg-[#141414]">Featured First</option>
                  <option value="price-asc" className="bg-[#141414]">Price: Low to High</option>
                  <option value="price-desc" className="bg-[#141414]">Price: High to Low</option>
                  <option value="rating" className="bg-[#141414]">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#D7192A] text-white"
                    : "bg-[#0A0A0A] text-[#8A8A8A] hover:text-[#F5F5F5] border border-[#1F1F1F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-[#8A8A8A] mb-6">
          <span>Showing <strong className="text-[#F5F5F5]">{filteredProducts.length}</strong> trade products</span>
          <span>Sample prices · Confirm with owner for trade bulk lots</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-3">
            <ShoppingBag className="w-12 h-12 text-[#8A8A8A] mx-auto" />
            <h3 className="font-heading font-bold text-lg text-[#F5F5F5]">No matching products found</h3>
            <p className="text-xs text-[#8A8A8A]">Try adjusting your search terms or selecting another category.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-[#D7192A] text-white text-xs font-bold uppercase rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden flex flex-col justify-between card-hover-glow group"
              >
                <div>
                  {/* Image with Badges & Quick View Button */}
                  <div className="relative aspect-4/3 bg-[#0A0A0A] overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5 flex flex-col items-end gap-1">
                      {product.featured && (
                        <span className="bg-[#D7192A] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          Trade Pick
                        </span>
                      )}
                      <span className="bg-[#0A0A0A]/85 backdrop-blur-md border border-[#1F1F1F] text-neutral-300 text-[10px] font-semibold px-2 py-0.5 rounded">
                        In Stock
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openQuickView(product)}
                      className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/70 hover:bg-[#D7192A] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      title="Quick View"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-semibold text-[#8A8A8A]">
                      {product.category}
                    </div>

                    <Link
                      to={`/shop/${product.slug}`}
                      className="font-heading font-bold text-sm text-[#F5F5F5] hover:text-[#D7192A] transition-colors line-clamp-2 block"
                    >
                      {product.name}
                    </Link>

                    <p className="text-xs text-[#8A8A8A] line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Color Swatches if paint/pointing */}
                    {product.variants && (
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="text-[10px] text-neutral-500 mr-1">Colours:</span>
                        {product.variants.map((v) => (
                          <span
                            key={v.id}
                            title={v.name}
                            style={{ backgroundColor: v.colorHex }}
                            className="w-3.5 h-3.5 rounded-full border border-neutral-600 inline-block shadow-xs"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="p-5 pt-0">
                  <div className="flex items-baseline justify-between mb-3 border-t border-[#1F1F1F] pt-3">
                    <div>
                      <span className="font-heading font-black text-xl text-[#F5F5F5] tabular-nums">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-[#8A8A8A] ml-1">AUD incl. GST</span>
                    </div>
                    <div className="flex items-center text-amber-400 text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                      <span>{product.rating}</span>
                      <span className="text-neutral-500 text-[11px] ml-0.5">({product.reviewCount})</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/shop/${product.slug}`}
                      className="py-2.5 text-center text-xs font-semibold text-neutral-300 bg-[#1F1F1F] hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      Specifications
                    </Link>
                    <button
                      type="button"
                      onClick={() => addItem(product, 1)}
                      className="py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#D7192A] hover:bg-[#B01020] rounded-lg shadow-md shadow-red-950/40 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setQuickViewProduct(null)}
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-[#141414] border border-[#1F1F1F] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden">
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 p-2 text-[#8A8A8A] hover:text-white rounded-lg hover:bg-[#1F1F1F]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#1F1F1F]">
                  <img
                    src={quickViewProduct.imageUrl}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-[#8A8A8A] uppercase">
                      {quickViewProduct.category}
                    </span>
                    <h3 className="font-heading font-black text-xl text-[#F5F5F5] uppercase mt-0.5">
                      {quickViewProduct.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-heading font-black text-2xl text-[#F5F5F5] tabular-nums">
                        ${quickViewProduct.price.toFixed(2)} AUD
                      </span>
                      <span className="text-xs text-[#8A8A8A]">incl. GST</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {quickViewProduct.shortDesc}
                  </p>

                  {/* Variant Selection if available */}
                  {quickViewProduct.variants && (
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#8A8A8A]">
                        Select Colour / Variant:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {quickViewProduct.variants.map((v) => (
                          <button
                            type="button"
                            key={v.id}
                            onClick={() => setSelectedVariant(v)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-2 ${
                              selectedVariant?.id === v.id
                                ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                                : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                            }`}
                          >
                            {v.colorHex && (
                              <span
                                style={{ backgroundColor: v.colorHex }}
                                className="w-3 h-3 rounded-full border border-neutral-600 inline-block"
                              />
                            )}
                            <span>{v.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-xs font-semibold text-[#8A8A8A]">Quantity:</span>
                    <div className="flex items-center bg-[#0A0A0A] border border-[#1F1F1F] rounded-lg">
                      <button
                        type="button"
                        onClick={() => setQuickViewQty(Math.max(1, quickViewQty - 1))}
                        className="p-2 hover:text-[#D7192A]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold tabular-nums">{quickViewQty}</span>
                      <button
                        type="button"
                        onClick={() => setQuickViewQty(quickViewQty + 1)}
                        className="p-2 hover:text-[#D7192A]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="button"
                      onClick={handleQuickViewAdd}
                      className="w-full py-3 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/40"
                    >
                      Add to Cart
                    </button>
                    <Link
                      to={`/shop/${quickViewProduct.slug}`}
                      onClick={() => setQuickViewProduct(null)}
                      className="block text-center text-xs text-[#8A8A8A] hover:text-white"
                    >
                      View Full Specifications & Coverage Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
