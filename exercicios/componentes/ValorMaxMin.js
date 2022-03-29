import { Text } from "react-native";

export default (props) => (
    console.warn(props),
    <Text>O valor maximo é {props.min} e o valor minimo é {props.max} nome é {props.nome} </Text>
)