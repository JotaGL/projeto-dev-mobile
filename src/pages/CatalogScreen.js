import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { ScrollView, View, Text, Modal, TouchableOpacity } from 'react-native';

const Products = [
  {
    id: 1,
    image: require('../assets/ArvoreNatalMedia.jpg'),
    name: 'Arvote de Natal(Média)',
    price: 'R$ 99,99',
    description: 'Lindo macramê feito à mão, ideal para decoração de ambientes internos.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris nunc, molestie id massa et, consequat sollicitudin nulla. Vestibulum a arcu vel erat feugiat hendrerit. Suspendisse feugiat gravida lectus. Etiam luctus mattis neque et ultricies. Donec consequat arcu quis ullamcorper vulputate. Duis euismod lacinia quam, in accumsan justo hendrerit id. Nulla dignissim diam tortor, non consectetur sem tristique ut. Sed vitae tempor justo. Phasellus pretium dolor ac massa placerat iaculis et in neque. Donec faucibus mauris eget rutrum convallis. Etiam pellentesque eros ut hendrerit pharetra. Curabitur massa nulla, vulputate vitae porttitor suscipit, volutpat quis tellus. Aenean fringilla rhoncus arcu ut iaculis.',
  },
  {
    id: 2,
    image: require('../assets/ArvoreNatalPequena.jpg'),
    name: 'Arvore de Natal(Pequena)',
    price: 'R$ 99,99',
    description: 'Lindo macramê feito à mão, ideal para decoração de ambientes internos.',
    details: 'Este macramê é feito de materiais ecológicos e é ideal para decorar quartos, salas e escritórios com um toque natural.',
  },
  {
    id: 3,
    image: require('../assets/PainelNossaSenhora.jpg'),
    name: 'Painel de Nossa Senhora',
    price: 'R$ 99,99',
    description: 'Lindo macramê feito à mão, ideal para decoração de ambientes internos.',
    details: 'Este macramê é feito de materiais ecológicos e é ideal para decorar quartos, salas e escritórios com um toque natural.',
  },
  {
    id: 4,
    image: require('../assets/PainelCoraçãoSimples.jpg'),
    name: 'Painel de Coração',
    price: 'R$ 99,99',
    description: 'Lindo macramê feito à mão, ideal para decoração de ambientes internos.',
    details: 'Este macramê é feito de materiais ecológicos e é ideal para decorar quartos, salas e escritórios com um toque natural.',
  },
  {
    id: 5,
    image: require('../assets/TerçoMadeira.jpg'),
    name: 'Terço de Madeira',
    price: 'R$ 99,99',
    description: 'Lindo macramê feito à mão, ideal para decoração de ambientes internos.',
    details: 'Este macramê é feito de materiais ecológicos e é ideal para decorar quartos, salas e escritórios com um toque natural.',
  },
  {
    id: 6,
    image: require('../assets/FiltroSonhosPequeno.jpg'),
    name: 'Filtro dos Sonhos(Pequeno)',
    price: 'R$ 99,99',
    description: 'Lindo macramê feito à mão, ideal para decoração de ambientes internos.',
    details: 'Este macramê é feito de materiais ecológicos e é ideal para decorar quartos, salas e escritórios com um toque natural.',
  },
  // Outros produtos
];

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
`;

const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ProductPrice = styled.Text`
  font-size: 14px;
  color: #888;
`;

const Screen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
                <ProductPrice>{product.price}</ProductPrice>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Icon name="shopping-cart" type="material" color="#000" size={20} />
                </View>
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
                <Icon name="close" type="material" color="#000" size={24} />
              </CloseButton>
            </CloseButtonContainer>
            <ScrollView>
              <ProductImageModal source={selectedProduct?.image} />
              <ModalTitle>{selectedProduct?.name}</ModalTitle>
              <ModalPrice>{selectedProduct?.price}</ModalPrice>
              <ModalDescription>{selectedProduct?.details}</ModalDescription>
            </ScrollView>
          </ModalContent>
        </FullScreenModalContainer>
      </Modal>
    </Container>
  );
};

export default Screen;

// Estilos adicionais para o modal
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
  background-color: #fff;
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
  margin-top: 10px;
`;

const ModalPrice = styled.Text`
  font-size: 18px;
  color: #888;
  margin-top: 5px;
`;

const ModalDescription = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

const ActionButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ActionButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${(props) => props.backgroundColor || '#007BFF'};
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-horizontal: 5px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
