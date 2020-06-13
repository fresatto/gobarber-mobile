import styled from "styled-components/native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  background-color: #f64c75;
`;
