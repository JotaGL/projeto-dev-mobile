import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const Carrinho = () => {
  const [produtos, setProdutos] = useState([]);

  // ... outras funções e lógica

  return (
    <View>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <View>
            <Text>Produto: {item.nome}</Text>
            <Text>Preço: R$ {item.preco}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Button title="-" onPress={() => removerProduto(item.id)} />
            <Button title="+" onPress={() => adicionarProduto(item.id)} />
          </View>
        )}
      />
      <Text>Total: R$ {calcularTotal()}</Text>
      <Button title="Finalizar Compra" />
    </View>
  );
};

export default Carrinho;