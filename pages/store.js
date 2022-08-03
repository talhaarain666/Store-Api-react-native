import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Image, Text, View } from "react-native";

let Store = () => {

    let api = "https://fakestoreapi.com/products"
    const [data, setData] = useState([]);

    let getApiData = () => {
        axios.get(api).then((res) => {
            setData(res.data)
            // console.log(res.data)
            // console.log(res.data)
        }).catch((err) => {
            alert(err)
        })

    }
    useEffect(() => {
        getApiData();
    }, [])

    // const navigate = useNavigate();
    return <>
        <View style={{ backgroundColor: "black" }}>

            {data.map((val, i) => {
                return <>
                    {/* onClick={() => navigate(`/card`, { state: val })} */}
                    <View>
                        <View style={{ padding: 2 }} >
                            {/* <View >
                                <Image width={250} source={val.image} />
                            </View> */}
                            <View>
                                <Text>{val.title}</Text>
                            </View>
                            <View>
                                <Text >{val.description}</Text>
                            </View>
                            <View style={{ justifyContent: "space-between" }} >
                                <View>
                                    <Text>Category: {val.category}</Text>
                                </View>
                                <View>
                                    <Text>Price: {val.price}</Text>
                                </View>
                            </View>
                            <Text variant="h4">{val.id}</Text>
                            <View style={{ justifyContent: "center" }} >
                                <View>
                                    <Text style={{

                                        verticalAlign: "middle",

                                    }} >{val.rating.rate}</Text>
                                </View>
                                <View>
                                    <Text>{"(" + val.rating.count + ")"}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </>
            })}

        </View>
    </>
}
export default Store;