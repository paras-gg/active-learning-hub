import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const handleBuyWhatsApp = () => {
    const message = `Halo Active, saya ingin membeli:\n\n*${product.name}*\nHarga: ${formatPrice(product.price)}\n\nMohon informasi selanjutnya.`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="card-product group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
            HEMAT {Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}
        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
          {product.category === 'ebook' ? 'EBOOK' : 'WORKSHEET'}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
            {product.ageRange}
          </span>
          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
            {product.pages} hal
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-extrabold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 rounded-full"
          >
            <Link to={`/produk/${product.slug}`}>
              <Eye className="w-4 h-4 mr-1" />
              Detail
            </Link>
          </Button>
          <Button
            onClick={handleBuyWhatsApp}
            size="sm"
            className="flex-1 rounded-full btn-whatsapp text-sm px-3"
          >
            Beli via WA
          </Button>
        </div>

        {/* Add to Cart */}
        <Button
          onClick={() => addToCart(product)}
          variant="ghost"
          size="sm"
          className={`w-full mt-2 rounded-full ${inCart ? 'text-primary' : ''}`}
          disabled={inCart}
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          {inCart ? 'Sudah di Keranjang' : 'Tambah ke Keranjang'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
