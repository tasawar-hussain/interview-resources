return (
  <>
    {quickFilters.map(({ value, label }) => (
      <>
        {isListFilter ? (
          <li
            key={value}
            id={value}
            className={cn(className, { [selectedClassName]: quickFilterSelectedId === value })}
            onClick={() => onFilterClickHandler(value)}
          >
            {label}
          </li>
        ) : (
          <span
            key={value}
            id={value}
            className={cn(className, { [selectedClassName]: quickFilterSelectedId === value })}
            onClick={() => onFilterClickHandler(value)}
          >
            {label}
          </span>
        )}
      </>
    ))}
  </>
