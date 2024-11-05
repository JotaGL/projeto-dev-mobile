import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { ScrollView, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import Products from '../Products';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f8f5f2;
`;

const ProductGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductCard = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 48%;
  margin-bottom: 20px;
  align-items: center; 
  height: 320px; /* Aumentar altura do cartão para acomodar o botão */
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 150px; 
  border-radius: 10px;
  resize-mode: cover;
`;

const ProductInfo = styled.View`
  margin-top: 10px;
  align-items: center;
  flex: 1; 
  justify-content: space-between; 
`;

const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #4b3b3a; 
  text-align: center; 
`;

const ProductPrice = styled.Text`
  font-size: 14px;
  color: #a07d75; 
  text-align: center; 
`;

const CartButton = styled.TouchableOpacity`
  background-color: #BA7868; /* Cor do botão */
  padding: 8px 12px; /* Tamanho reduzido */
  border-radius: 5px;
  margin-top: 10px;
  flex-direction: row; /* Para alinhar ícone e texto */
  align-items: center; /* Centralizar verticalmente */
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 5px; /* Espaço entre o ícone e o texto */
`;

const FullScreenModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
`;

const ModalContent = styled.View`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  height: 80%;
  margin: 20px;
`;

const CloseButtonContainer = styled.View`
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1;
`;

const CloseButton = styled.TouchableOpacity`
  background-color: #BA7868; 
  border-radius: 12px;
  padding: 5px;
`;

const ProductImageModal = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
`;

const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #4b3b3a; 
`;

const ModalPrice = styled.Text`
  font-size: 18px;
  color: #a07d75; 
  margin-top: 5px;
`;

const ModalDescription = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

const Screen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect( () =>{
    cart();
  }, 
  []);

  async function cart () {
    const carrinho = await SecureStore.getItemAsync("carrinho");
    if (carrinho) {
      const produtoId = JSON.parse(carrinho);
      for (let i = 0; i < produtoId.lenght; i++) {
        setProductList([ 
          ...productList, 
          produtoId[i]
        ])
      }
    }
  }

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    <Container>
      <ScrollView>
        <ProductGrid>
          {Products.map((product) => (
            <ProductCard key={product.id} onPress={() => openModal(product)}>
              <ProductImage source={product.image} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{"R$ " + product.price}</ProductPrice>
                <CartButton onPress={async() => {
                  setProductList([ 
                    ...productList, 
                    product.id
                  ])
                  await SecureStore.setItemAsync("carrinho", JSON.stringify(productList));
                }}>
                  <Icon name="shopping-cart" type="material" color="#fff" size={16} />
                  <ButtonText>Adicionar</ButtonText>
                </CartButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <FullScreenModalContainer>
          <ModalContent>
            <CloseButtonContainer>
              <CloseButton onPress={closeModal}>
                <ButtonText>X</ButtonText>
              </CloseButton>
            </CloseButtonContainer>
            <ScrollView>
              <ProductImageModal source={selectedProduct?.image} />
              <ModalTitle>{selectedProduct?.name}</ModalTitle>
              <ModalPrice>{"R$ " + selectedProduct?.price}</ModalPrice>
              <ModalDescription>{selectedProduct?.details}</ModalDescription>
            </ScrollView>
          </ModalContent>
        </FullScreenModalContainer>
      </Modal>
    </Container>
  );
};

export default Screen;
