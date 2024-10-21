import React, { useState } from "react";
import { ColorVariantTypes, TabProps, TabTitleProps } from "../../types";

import "./tabs.scss";

const getColorFromVariant = (variant: ColorVariantTypes) => {
  return {
    primary: "blue",
    secondary: "red",
    tertiary: "green",
  }[variant];
};

const TabTitle: React.FC<TabTitleProps> = ({
  isActive,
  title,
  onSelect,
  colorVariant,
}) => {
  return (
    <div
      className="tab__title"
      onClick={onSelect}
      style={{
        borderBottom: isActive
          ? `2px solid ${getColorFromVariant(colorVariant)}`
          : undefined,
      }}
    >
      <span>{title}</span>
    </div>
  );
};

export const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>;

const Tabs: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabTitle = (child: React.ReactNode, idx: number) => {
    if (React.isValidElement(child) && child.props.title) {
      const colorVariant = child.props.color ?? "primary";
      return (
        <TabTitle
          key={idx}
          onSelect={() => setActiveTab(idx)}
          title={child.props.title}
          isActive={activeTab === idx}
          colorVariant={colorVariant}
        />
      );
    }
    return null;
  };

  return children ? (
    <>
      <div className="tab__container">
        {Array.isArray(children)
          ? children.map((child, idx) => renderTabTitle(child, idx))
          : renderTabTitle(children, 0)}
      </div>
      {Array.isArray(children)
        ? React.isValidElement(children[activeTab]) && children[activeTab]
        : React.isValidElement(children) && children}
    </>
  ) : (
    <></>
  );
};

export default Tabs;
