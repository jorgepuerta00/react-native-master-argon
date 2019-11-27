import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";

//galio
import { Block, theme } from "galio-framework";

//argon
import { Card } from "../../components/";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

const ITEMS = [
  {
    data: [{
            title: "Spa and Health Center",
            image: "http://www.lasplash.com/uploads//369f/4f5053c92d15e-spring-forward-with-glowing-skin-thanks-to-dr.-murad-murad-spa-all-inclusive-health-canter-medical-group-shows-you-how-to-become-healthy-happy-and-gorgeous-and-stay-that-way-1.jpg",
            cta: 'Check availability', 
            horizontal: true,
          },
          {
            title: "Hair & Makeup",
            image: "http://www.norbertopeluqueria.com/img/0240/083.jpg",
            cta: 'Check availability', 
            horizontal: true,
          }]
  },
  {
    data: [{    
            title: "Cosmetic Dentist",
            image: "https://culturaempleo.com/wp-content/uploads/2018/09/consultorio-odontologico.jpg",
            cta: 'Check availability', 
            horizontal: true, 
          },
          {
            title: "Massage Therapy",
            image: "https://www.naturalhealers.com/wp-content/uploads/2016/10/massage-therapy-tuition.jpg",
            cta: 'Check availability', 
            horizontal: true,      
          }]
  },
  {
    data: [{
            title: "Dry Clean and Laundry",
            image: "http://riamichelle.com/wp-content/uploads/Miami-Fashion-Blogger-Inkkas-Laundromat.jpg",
            cta: 'Check availability', 
            horizontal: true,      
          },
          {
            title: "Dog Daycare, Board, Groom",
            image: "https://www.hthproject.com//upload/DI/LG/6/DIListing-15286-Photo1.jpg",
            cta: 'Check availability', 
            horizontal: true,      
          }]
  }
];

const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Music Album",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
    price: "$125"
  },
];

class Services extends React.Component {
  renderService = (item, index) => {
    return (
      <Block flex row key={`service-${index}`}>
        <Card item={item.data[0]} style={{ marginRight: theme.SIZES.BASE }}/>
        <Card item={item.data[1]} />
      </Block> 
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>        
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            { ITEMS && ITEMS.map((item, index) => this.renderService(item, index) )}
          </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView style={styles.screenSize} showsVerticalScrollIndicator={false}>                              
            {this.renderCards()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  group: {
    paddingTop: theme.SIZES.BASE
  },
  screenSize: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
});

export default Services;
