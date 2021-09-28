# react-native-phone-with-flag

![](https://i.imgur.com/N39m09b.gif)

react-native-phone-with-flag is a plugin to get country flags on the left side of input component and can select any country flag from popup modal. 

## Getting started

`$ npm install react-native-phone-with-flag --save`

`$ yarn add react-native-phone-with-flag`

To use this dependency in your project, the following packages are needed. 
1. 'react'
2. 'formik'
3. 'yup'
4. 'react-native-country-picker-modal'
2. 'react-native-gesture-handler'
3. 'react-native'
5. 'native-base'
4. '@expo/vector-icons'

### Mostly automatic installation


## Usage (Example of react-native-phone-with-flag )
```javascript



import React, {Component} from 'react';
import {View} from 'react-native'; 
import PhoneNumberWithFlag from 'react-native-phone-with-flag';

/*
    npm install react-native-phone-with-flag
*/

export default class App extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
        <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
            <PhoneNumberWithFlag getNum={()=>{
                //function to return data that is given as input.
            }} placeHolder={'enter phone number'}  />
        </View>
        );
    }
}


// TODO: What to do with the module?
PhoneNumberWithFlag;
```

# required Props and its datatypes :

1. placeHolder  : '' or String

2. getNum       : func() 
                        .returns data that is given in input field.

# Credit goes to : 

react, formik, yup, react-native-country-picker-modal ,react-native-gesture-handler, react-native, native-base, @expo/vector-icons

# Contribution :

if you like my work 😀 u can contribute using vpa
vpa : krishna.santho08@okaxis

it will be a great support to me ☺.

