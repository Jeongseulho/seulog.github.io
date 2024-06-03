import { Link } from 'gatsby';
import React from 'react';

export type TagListProps = {
  categories: {
    [key: string]: number;
  };
};

interface TagMenuProps {
  tags: { [key: string]: number };
}

const TagMenu = ({ tags }: TagMenuProps) => {
  return (
    <div>
      {Object.keys(tags).map((tag, index) => (
        <Link key={`${tag}_${index}`} to={`/?tag=${tag}`}>
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default TagMenu;
