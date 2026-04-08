import {View,Text} from 'react-native';
import {Link} from "expo-router"

const SignUp = () =>{
    return (
        <View>
            <Text>SigUp</Text>
            <Link href="/(auth)/sign-up">登录</Link>
        </View>
    )
}

export default SignUp