import React from 'react'
import {shallow} from 'enzyme'
import PriceList from '../PriceList'
import {items,categories} from '../../containers/Home'

const itemsWithCategory=items.map(item=>{
	item.category=categories[item.id]
	return item
})

const props={
	items:itemsWithCategory,
	onModify:()=>{},
	onDeleteItem:()=>{},
}

describe('test PriceList component',()=>{
	beforeEach(()=>{
		wrapper=shallow(<PriceList {...props}/>)
	})

})