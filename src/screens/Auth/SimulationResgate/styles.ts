import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  Dimensions,
  Platform,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {DataListProps} from '.';


export const Container = styled.ScrollView`
  flex: 1;
  background: ${({theme}) => theme.Palette.background.input};
`;


export const Content = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.Palette.common.white};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(19)}px;
  text-align: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.Palette.links.main};
`;
export const SubHeader = styled.View`
  width: 100%;
  height: ${RFValue(4)}px;
  background-color: ${({theme}) => theme.Palette.warning.main};
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.Palette.text.disabled};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  margin-top: 3px;
  margin-bottom: 8px;
`;

export const ResgateWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

export const SpaceBetween = styled.View``;

export const TextBetween = styled.Text`
  color: ${({theme}) => theme.Palette.text.disabled};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(4)}px;
  text-align: left;
`;

export const TextResgate = styled.Text`
  color: ${({theme}) => theme.Palette.text.disabled};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(11)}px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
`;
export const SubTextLogin = styled.Text`
  color: ${({theme}) => theme.Palette.text.primary};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  margin-top: 3px;
  text-align: center;
`;

export const TransactionList = styled(
  FlatList as new () => FlatList<DataListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

