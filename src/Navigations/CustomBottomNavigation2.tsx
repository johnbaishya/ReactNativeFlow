import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Divider, useTheme } from 'react-native-paper';
import { CustomThemeProp } from '../Types/themeTypes';
import { COLORS, FONTS } from '../Constants/themeConstants';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// const home = require('../assets/images/icons/home.png');
// const category = require('../assets/images/icons/category.png');
// const wishlist = require('../assets/images/icons/heart.png');
// const user = require('../assets/images/icons/user3.png');
// const polygon = require('../assets/images/icons/polygon.png');
// const bag = require('../assets/images/icons/bag.png');
// const menu = require('../assets/images/icons/hamburger.png');

const CustomBottomNavigation = ({ state, descriptors, navigation }:BottomTabBarProps) => {

    const {colors}:CustomThemeProp = useTheme();

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
                                        paddingVertical:9,
                                        backgroundColor:isFocused ?colors.primary:colors.card,
                                        width:60,
                                        height:50,
                                        borderRadius:10,
                                        marginVertical:5,
                                        padding:5,
                                        justifyContent:'center'
                                    }}
                                    >
                                   
                                    <FontAwesomeIcon
                                        style={{
                                            color:isFocused ? COLORS.white : colors.textLight,
                                            // opacity:isFocused ? 1 : .4,
                                            marginBottom:3,
                                            marginTop:1,
                                        }}
                                        size={35}
                                        name="home"
                                    />
                                    <Text style={{
                                        ...FONTS.fontXs,
                                        ...FONTS.fontBold,
                                        color:isFocused ? COLORS.white:colors.textLight,
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
