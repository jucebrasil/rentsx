import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';

export function Home() {
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png'
  }
  /* const carDataTwo = {
    brand: 'Porshe',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://www.lugenergy.pt/wp-content/uploads/PORSCHE-PANAMERA-4-E-HYBRID.png'
  } */
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} />}

      />
      {/* <Car data={carDataTwo} /> */}


    </Container>
  );
}

// Libs usadas neste projeto
//https://github.com/kristerkari/react-native-svg-transformer
//yarn add react-native-responsive-fontsize
//yarn add -D typescript @types/react @types/react-native
