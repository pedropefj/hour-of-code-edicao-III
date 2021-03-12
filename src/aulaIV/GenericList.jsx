import PropTypes from 'prop-types';
import { makeSlyles, makeStyles } from '@material-ui/styles';
//import SeachInput from './SeachInput';
import React from 'react';

const GenericList = (props) => {
   const {items, renderItem, uniqKey } = props;

   return (
        <>
            {/* {onSearch && <SeachInput onType={onSearch} searchText ={searchText}/>} */}
            {items.map((item) => (
                <React.Fragment key={item[uniqKey]}>{renderItem(item)}</React.Fragment>
            ))}
        </>
   );
};

GenericList.propTypes = {
    items: PropTypes.array,
    renderItem: PropTypes.func,
    uniqKey: PropTypes.string,
};

const useStyles = (makeStyles({}));

export default GenericList;