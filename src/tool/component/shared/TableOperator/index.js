import { Input, Button } from "antd";
import React from "react";
import style from "./style.module.less";
class TableOperator extends React.Component {
   render() {
    const parameters = this.props;
    // const {values} = parameters;
    return (
      <div className={`${style.wrapper} clearfix`}>
        <Button
          type="primary"
          onClick={parameters.onButtonClick}
          style={{ float: "right" }}
        >
          {parameters.buttonName}
        </Button>
        {parameters.hasSearchBox ? (
          <div className={style["search-box"]}>
            <label className={style["search-label"]}>
              {parameters.labelText}:
            </label>
            <Input.Search
              className={style["search-input"]}
              placeholder={parameters.placeholderContent}
              onSearch={parameters.handlerSearch}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default TableOperator;
