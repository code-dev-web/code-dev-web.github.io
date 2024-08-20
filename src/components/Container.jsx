export const Container = ({ children, className = "", styleProps = {} }) => (
  <div className={`container ${className}`} style={{ ...styleProps }}>
    {children}
  </div>
);

export const PageContainer = ({
  children,
  className = "",
  styleProps = {},
}) => (
  <div className={`container p-sm ${className}`} style={{ ...styleProps }}>
    {children}
  </div>
);

export const WrapperContainer = ({
  children,
  className = "",
  styleProps = {},
}) => (
  <div className={`${className}`} style={{ ...styleProps }}>
    {children}
  </div>
);
