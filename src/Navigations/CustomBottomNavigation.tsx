import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Divider, useTheme } from 'react-native-paper';
import { CustomThemeProp } from '../Types/themeTypes';
import {FONTS } from '../Constants/themeConstants';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// const home = require('../assets/images/icons/home.png');
// const category = require('../assets/images/icons/category.png');
// const wishlist = require('../assets/images/icons/heart.png');
// const user = require('../assets/images/icons/user3.png');
// const polygon = require('../assets/images/icons/polygon.png');
// const bag = require('../assets/images/icons/bag.png');
// const menu = require('../assets/images/icons/hamburger.png');

const CustomBottomNavigation = ({ state, descriptors, navigation }:BottomTabBarProps) => {

    const theme:CustomThemeProp = useTheme();
    const {colors} = theme;

    const getIconName = (routeName:string):string=>{
        let iconName = "home";
        switch (routeName) {
            case "Home":
                iconName = "home";
                break;
            case "Test1":
                iconName = "user";
                break;
            case "Test2":
                iconName = "search";
                break;
            default:
                iconName = 'home';
                break;
        }

        return iconName;
    };

    return (
        <View
        >
            <Divider/>
            <View
                style={{
                    // height:60,
                    backgroundColor:colors.card,
                    // backgroundColor:COLORS.primary,
                    flexDirection:'row',
                    justifyContent:"space-between"
                }}
            >
                {state.routes.map((route, index:number) => {

                    const { options } = descriptors[route.key];
                    const label = ():string=>{
                        let name = options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;
                        return name as string;
                    };

                    const isFocused = state.index === index;
                    
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true } as never);
                        }
                    }
                        return(
                            <View
                                key={index}
                                style={{
                                    width:'30%',
                                    alignItems:'center',
                                }}
                            >
                                <TouchableOpacity
                                    onPress={onPress}
                                    style={{
                                        alignItems:'center',
                                        // paddingVertical:9,
                                        // backgroundColor:isFocused ?colors.primary:colors.card,
                                        // width:50,
                                        // height:50,
                                        borderRadius:10,
                                        marginVertical:5,
                                        // padding:5,
                                        justifyContent:'center'
                                    }}
                                    activeOpacity={0.8}
                                    >
                                   
                                    <FontAwesomeIcon
                                        style={{
                                            color:isFocused ? colors.text : colors.textLight,
                                            // opacity:isFocused ? 1 : .4,
                                            marginBottom:3,
                                            marginTop:1,
                                        }}
                                        size={32}
                                        name={getIconName(label())}
                                    />
                                    <Text style={{
                                        ...FONTS.fontXs,
                                        ...FONTS.fontBold,
                                        color:isFocused ? colors.text : colors.textLight,
                                        // opacity:isFocused ? 1 : .4
                                        }}>{label()}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                })}
            </View>
        </View>
    );
};

export default CustomBottomNavigation;



// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
