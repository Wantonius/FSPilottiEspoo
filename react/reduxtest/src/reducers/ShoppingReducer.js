const initialState = {
	list:[],
	id:100
}

const shoppingReducer = (state = initialState, action) => {
	console.log("ShoppingReducer - before switch:"+action.type);
	let tempState = {}
	switch(action.type) {	
		case "ADD_TO_LIST": 
			let tempList = [];
			for(let i=0;i<state.list.length;i++) {
				tempList.push(state.list[i])
			}
			let tempId = state.id+1;
			let temp = action.item;
			temp.id = tempId;
			tempList.push(temp);
			tempState = {
				list:tempList,
				id:tempId
			}
			return tempState;
		case "REMOVE_FROM_LIST": 
			let tempList2 = [];
			let deleteId = parseInt(action.id,10)
			for(let j=0;j<state.list.length;j++) {
				if(deleteId !== state.list[j].id) {
					tempList2.push(state.list[j])
				}
			}
			tempState= {
				...state,
				list:tempList2
			}
			return tempState;
		default:
			return state;
	}
}
export default shoppingReducer;