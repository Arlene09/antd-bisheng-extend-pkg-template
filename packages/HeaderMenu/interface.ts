 /** 
 * StateProps 参数说明
 * @param string visible      : 可见性
//  * @param string key          : 表单项主键
//  * @param string style        : 表单项样式
//  * @param string required     : 表单项是否必填
//  * @param string placeholder  : 表单项说明文字
//  * @param string defaultValue : 表单项默认值
//  * @param string disable      : 表单项是否禁用
//  * @param string rules        : 表单项校验规则
//  * @param string maxLength    : 表单项最大长度
*/
export interface StateProps {
  visible: boolean,
  // key: string,          //  表单项主键
  // style?: object,        //  表单项样式
  // required?: boolean,    //  表单项是否必填
  // placeholder?: string,  //  表单项说明文字
  // defaultValue?: any, //  表单项默认值
  // disable?: Function,      //  表单项是否禁用
  // rules?: [],        //  表单项校验规则
  // maxLength: number,    //  表单项最大长度
  // [propName: string]: any
}


/** 
 * MenuProps 参数说明
 * @param string visible      : 可见性
//  * @param string style        : 表单项样式
*/
export interface MenuProps {
  visible: symbol,
  confirmLoading?: boolean,
  onCancel?: Function,
  form?: any,
  onOk?: Function
}
