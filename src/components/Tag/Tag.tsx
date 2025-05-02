import React, {ReactNode} from 'react';

import './tag.scss';

interface TagProps {
  children: ReactNode;
}
function Tag({children}: TagProps) {
  return (<div className="tag">{children}</div>);
}

export default Tag;
