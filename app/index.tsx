import { initialWindowMetrics, SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { View,Text,Image, TextInput, TouchableOpacity, Switch,} from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { StyleLogin } from '../components/components - Login/Style/StyleLogin';
import { StatusBar } from 'react-native';
import { router } from 'expo-router';
import { useStyleLogin } from '../components/components - Login/hooks/useStyleLogin';


export default function index() {


  const [TextPassword,setTextPassword] = useState<String>('');
  const [TextEmail,setTextEmail] = useState<String>('');

  const {IconPass,IconPassword,checBoxValue,setIconPassword,setcheckBoxValue} = useStyleLogin();

  return (
    <SafeAreaView style={{}}>
        <View style={StyleLogin.Container_1}>
            <Image 
              style={StyleLogin.Logo_Container_1} 
              source={require('../assets/assetsLogin/img/IconoApp.jpg')}/>
        </View>

        <View style={{paddingHorizontal:20}}>
          <View style={{paddingVertical:40}}>
            <Text style={{fontSize:28}}>Log In</Text>
          </View>

          <View style={{gap:10}}>
            <View style={{gap:5}}>
              <Text style={{fontWeight:'500',fontSize:18}}>Email</Text>
              <TextInput style={StyleLogin.TextEmail} 
                placeholder='Email' onChangeText={setTextEmail}/>
            </View>

            <View style={{gap:5}}>
              <Text style={{fontWeight:'500',fontSize:18}}>Password</Text>
              <View style={StyleLogin.ContainerTextInputPassword}>
                <TextInput style={StyleLogin.TextInputPassword}  
                  placeholder='Password' secureTextEntry={IconPassword} onChangeText={setTextPassword}/>
                 <TouchableOpacity style={StyleLogin.BtnShowPassword} 
                  onPress={()=>setIconPassword(!IconPassword)}>
                  <IconPass/>
                 </TouchableOpacity>
              </View>
            </View>

            <View style={StyleLogin.ContainerCheckBox}>
              <Checkbox style={{borderRadius:10}} value={checBoxValue} onValueChange={setcheckBoxValue}/>
              <Text style={{fontWeight:'500'}}>I accept the terms and privacy policy</Text>
            </View>
          </View>
        </View>

        <View style={StyleLogin.ContainerInicios}>

          <TouchableOpacity style={StyleLogin.BtnLogin} 
            onPress={()=>{router.navigate({pathname: 'screens'})}}>
            <Text style={StyleLogin.TextBtnLogin}>Sign up</Text>
          </TouchableOpacity>

          <Text style={StyleLogin.TextOtherForm}>Or Register with</Text>

          <View style={StyleLogin.ContainerBtnInicioRapido}>

            <TouchableOpacity style={StyleLogin.BtnFacebook}>
              <Image 
              style={{objectFit:'cover',width:'150%',height:'150%'}} 
              source={require('../assets/assetsLogin/icon/facebook.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={StyleLogin.BtnGoogle}>
              <Image 
              style={{height:45,width:45,objectFit:'contain'}} 
              source={require('../assets/assetsLogin/icon/Google.png')}/>
            </TouchableOpacity>


            <TouchableOpacity style={StyleLogin.BtnApple}>
              <Image 
              style={{height:45,width:45,objectFit:'contain'}} 
              source={require('../assets/assetsLogin/icon/AppleLogo.png')}/>
            </TouchableOpacity>

          </View>

          <View style={StyleLogin.TextDontHaveAccount}>
            <Text>I don't a have an account?</Text>
            <TouchableOpacity>
              <Text style={{fontWeight:'600',textDecorationLine:'underline'}}>Sign up</Text>
            </TouchableOpacity>
          </View>

        </View>

        <StatusBar barStyle={'dark-content'}/>
    </SafeAreaView>
  )
}

