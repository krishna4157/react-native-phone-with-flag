import { Formik } from 'formik';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import * as Yup from 'yup';
import CountryPicker from 'react-native-country-picker-modal'
import PhNumberInput from './libs/PhNumberInput';




class PhoneNumberWithFlag extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cca2 : 'IN',
      callingCode: '+91',
      modalVisible: false,
      loading: false
    }
  }

  componentDidMount = async () => {
  }


  getCorrectPassword = async () => {
  }


  getWrongPassword = (e) => {
    this.setState({
      statusColor: 'blue'
    });
    this.setState({
      isSuccess: 0
    });
    // this.StartBackgroundColorAnimation()

    setTimeout(() => {

      this.setState({
        isSuccess: 2
      })
    }, 10000);

  }



  triggerModal = () => {
    this.setState({
      modalVisible : true
    });
  }

  changeCallCodeAndFlag = (cca2,cc) => {
    this.setState({
      callingCode : '+'+cc,
      cca2 : cca2
    });
  }


  render() {
    const { modalVisible, callingCode, cca2, loading } = this.state;
    const  { placeHolder, getNum} = this.props;
    return (
      <View style={{flex:1}}>
      <Formik
        initialValues={{
          phoneNum: '',
        }}
        validationSchema={Yup.object({
          phoneNum: Yup.string()
            .required('Enter Phone Number'),
        })}
        onSubmit={(values, formikActions) => {
          setTimeout(() => {
            this.checkValues(values);
            formikActions.setSubmitting(false);
          }, 500);
        }}>
        {props => {
          const {
            setFieldValue, setValues
          } = props;
          const getPhoneValue = (value, number) => {
            setFieldValue(
              'phoneNum', number)
              getNum(number);
          }

          return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#F7F7F7',justifyContent:'space-between' }}>
                  <PhNumberInput
                    placeHolder={placeHolder}
                    triggerModal={this.triggerModal}
                    callingCode={callingCode}
                    cca2={cca2}
                    getPhoneValue={getPhoneValue}
                    modalVisible={modalVisible} />
                  <CountryPicker
                    withCloseButton={true}
                    withFilter={true}
                    filterProps={{
                      style: {
                        paddingVertical: 20
                      }
                    }}
                    withFlag={true}
                    visible={modalVisible}
                    onSelect={value => {
                      this.changeCallCodeAndFlag(value.cca2,value.callingCode);
                    }}
                    withCountryNameButton={false}
                    placeholder=''
                    onClose={() => {
                      this.setState({
                        modalVisible: false,
                      })
                    }}
                    withCallingCode={true}
                    withEmoji={true}
                  />
            </View>

          )
        }}
      </Formik>
      </View>
    );

  }
}


export default PhoneNumberWithFlag;
