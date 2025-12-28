import { ReactNode } from 'react';
import { ShoppingCart, Trash2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';

interface CartDrawerProps {
  children: ReactNode;
}

const CartDrawer = ({ children }: CartDrawerProps) => {
  const { items, removeFromCart, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let message = `Halo Active, saya ingin memesan produk berikut:\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n   Harga: ${formatPrice(item.product.price)}\n\n`;
    });
    message += `*Total: ${formatPrice(totalPrice)}*\n\nMohon informasi pembayaran selanjutnya.`;

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Keranjang Belanja
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingCart className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Keranjang Kosong</h3>
              <p className="text-sm text-muted-foreground">
                Belum ada produk di keranjang. Yuk, pilih produk edukatif untuk si kecil!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-muted/50 rounded-xl"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm line-clamp-2">
                      {item.product.name}
                    </h4>
                    <p className="text-primary font-bold mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.product.id)}
                    className="flex-shrink-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="flex-col gap-3 sm:flex-col border-t pt-4">
            <div className="flex justify-between items-center w-full">
              <span className="text-muted-foreground">Total</span>
              <span className="text-2xl font-extrabold text-primary">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Button
              onClick={handleCheckoutWhatsApp}
              className="w-full btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Checkout via WhatsApp
            </Button>
            <Button
              variant="ghost"
              onClick={clearCart}
              className="w-full text-muted-foreground"
            >
              Kosongkan Keranjang
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
