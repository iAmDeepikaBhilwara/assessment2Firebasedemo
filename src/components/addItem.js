import React,{Component} from 'react';
import {TextInput,View,Text,Button} from 'react-native';
import {db} from '../config';

let itemsRef=db.ref('/items');

let addItem=item=>{
    db.ref('/items').push({
        itemInfo:item
    });
};

export default class AddItem extends Component{

    constructor(props){
        super();
        this.state={
            itemInfo:'',
            items:[],
        }

        this.handleChange=this.handleChange.bind(this);
        this.clickToAdd=this.clickToAdd.bind(this);
    }

    clickToAdd(){
         addItem(this.state.itemInfo)
    }

    handleChange(e){
       this.setState({itemInfo:e.nativeEvent.text})
    }

    componentDidMount(){
        itemsRef.on('value',snapshot=>{
            let data=snapshot.val();
            let items=Object.values(data);
            this.setState({items});
        })
    }
    render(){
        return(
            
                <View>
                    
                <TextInput
                    onChange={this.handleChange}
                ></TextInput>
                <Button title="submit"
                 onPress={this.clickToAdd}
                 ></Button>

                 {this.state.items.map(x=>{
                     return <Text>
                         {x.itemInfo}
                     </Text>
                 })}
            
                </View>
            
        )
    }
}