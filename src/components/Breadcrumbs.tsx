import React from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-[#8A8A8A]">
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <Link to="/" className="hover:text-[#F5F5F5] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-[#1F1F1F]" aria-hidden="true">/</span>
            {item.href ? (
              <Link to={item.href} className="hover:text-[#F5F5F5] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#F5F5F5] font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
