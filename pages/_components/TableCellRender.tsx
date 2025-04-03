import * as React from 'react';

import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';

export default function TableCellRender(props) {
  return ( 
      <div className="ag-theme-alpine">
          <IconButton onClick={()=>props.onEditClick(props.data)}><EditIcon /></IconButton>
          <IconButton onClick={()=>props.onRemoveClick(props.data)}><ClearIcon /></IconButton>
      </div>
  );
}