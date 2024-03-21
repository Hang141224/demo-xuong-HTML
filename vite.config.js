import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "Shop.html"),
                sanphamCT: resolve(__dirname, "sanphamCT.html"),
                cart: resolve(__dirname, "cart.html"),
                checkout: resolve(__dirname, "checkout.html"),
                Login: resolve(__dirname, "Login.html"),
            }
        },
    },
})