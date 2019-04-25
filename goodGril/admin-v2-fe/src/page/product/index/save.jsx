import React from 'react';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import PageTitle from 'component/page-title/index.jsx';

const _mm=new MUtil();
const _product=new Product();
class ProductSave extends React.Component{
	render(){
		return (
			<div id="page-wrapper">
				<PageTitle title="添加商品"/>
				<form className="form-horizontal">
				  <div className="form-group">
				    <label  className="col-md-2 control-label">商品名称</label>
				    <div className="col-md-5">
				      <input type="text" className="form-control"  placeholder="请输入商品名称"/>
				    </div>
				  </div>
				  <div className="form-group">
				    <label  className="col-md-2 control-label">商品描述</label>
				    <div className="col-md-5">
				      <input type="text" className="form-control" placeholder="请输入商品描述"/>
				    </div>
				  </div>
				  <div className="form-group">
				    <label  className="col-md-2 control-label">商品分类</label>
				    <div className="col-md-10">
				      <select name=""  className="form-control col-md-5">
				      	<option value="">请选择一级分类</option>
				      </select>
				      <select name=""  className="form-control col-md-4">
				      	<option value="">请选择二级分类</option>
				      </select>
				    </div>
				  </div>

				  <div className="form-group">
				    <div className="col-md-offset-2 col-md-10">
				      <button type="submit" className="btn btn-primary">Sign in</button>
				    </div>
				  </div>
				</form>
			</div>
		)
	}
}
export default ProductSave;