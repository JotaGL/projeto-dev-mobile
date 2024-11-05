import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Products from '../Products';
import * as SecureStore from 'expo-secure-store';

const UnderConstructionScreen = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadCart();
    }, [])
  );

  async function loadCart() {
    const carrinho = await SecureStore.getItemAsync("carrinho");
    if (carrinho) {
      const carrinhoArray = JSON.parse(carrinho);
      const productCounts = {};

      carrinhoArray.forEach(productId => {
        if (productCounts[productId]) {
          productCounts[productId] = 1;
        } else {
          productCounts[productId] = 1;
        }
      });

      const productsWithQuantity = Products.filter(product => productCounts[product.id])
        .map(product => ({
          ...product,
          quantity: productCounts[product.id],
        }));

      setCartProducts(productsWithQuantity);
    } else {
      setCartProducts([]);
    }
  }

  async function updateCartStorage(updatedCart) {
    const cartIds = updatedCart.flatMap(product =>
      Array(product.quantity).fill(product.id)
    );
    await SecureStore.setItemAsync("carrinho", JSON.stringify(cartIds));
    setCartProducts(updatedCart);
  }

  function increaseQuantity(productId) {
    const updatedCart = cartProducts.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    updateCartStorage(updatedCart);
  }

  function decreaseQuantity(productId) {
    const updatedCart = cartProducts
      .map(product => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
      .filter(product => product.quantity > 0);

    updateCartStorage(updatedCart);
  }

  async function clearCart() {
    await SecureStore.deleteItemAsync("carrinho");
    setCartProducts([]);
  }

  const totalValue = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itens no Carrinho:</Text>
      <ScrollView style={styles.scrollView}>
        {cartProducts.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity onPress={() => decreaseQuantity(product.id)}>
                <Text style={styles.arrow}>{"<"}</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{product.quantity}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(product.id)}>
                <Text style={styles.arrow}>{">"}</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.productPrice}>R$ {(product.price * product.quantity).toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summaryContainer}>
        <Text style={styles.totalText}>Total: R$ {totalValue.toFixed(2)}</Text>
        <TouchableOpacity style={styles.clearCartButton} onPress={clearCart}>
          <Text style={styles.clearCartText}>Limpar Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f5f2",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#151515",
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20
  },
  scrollView: {
    marginBottom: 20,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  productName: {
    flex: 1,
    fontSize: 18,
    color: "#4b3b3a",
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#BA7868",
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#4b3b3a",
  },
  productPrice: {
    fontSize: 16,
    color: "#4b3b3a",
  },
  summaryContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#4b3b3a",
    marginBottom: 10,
  },
  clearCartButton: {
    backgroundColor: "#BA7868",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  clearCartText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UnderConstructionScreen;