import React from 'react';

const SourcesListTemplates = function(props){
  return (
    <div>
      <input type="checkbox" name="source" value="{props.source}" />{props.source}
    </div>
  );
}

export default SourcesListTemplates;
