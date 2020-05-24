import React, { useMemo, useState, useEffect } from 'react';
import { debounce } from '../../services/helpers';
import { Select } from 'antd';

export const SearchAndSelect = ({
  onSearch = async () => [],
  onSelect = () => {},
  onBlur = () => {},
  renderOption = (record) => record.nombre,
  valueText,
  placeholder,
  searchOnFocus = true,
  notPagination = false,
}) => {
  const [source, setSource] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useMemo(
    () =>
      debounce((...args) => {
        setLoading(true);
        onSearch(...args)
          .then((results) => {
            setSource(results);
            setPage(1);
          })
          .finally(() => setLoading(false));
      }, 1000),
    [onSearch],
  );

  const [internalValue, setValue] = useState(valueText);
  useEffect(() => {
    setValue(valueText);
  }, [valueText]);

  const onDropdownScroll = (ev) => {
    if (notPagination) return;

    if (
      ev.target.scrollTop + ev.target.offsetHeight ===
      ev.target.scrollHeight
    ) {
      setLoading(true);
      onSearch(internalValue, page + 1)
        .then((results) => {
          setSource([...source, ...results]);
          setPage(page + 1);
        })
        .finally(() => setLoading(false));
    }
  };
  return (
    <Select
      defaultActiveFirstOption={false}
      loading={loading}
      backfill
      dropdownMatchSelectWidth={false}
      showArrow={false}
      notFoundContent='sin resultados'
      defaultValue={valueText}
      value={internalValue}
      onFocus={() => {
        if (searchOnFocus) {
          onSearch(valueText, 1)
            .then((results) => {
              setSource([...results]);
            })
            .finally(() => setLoading(false));
        }
      }}
      onSearch={(query) => {
        setValue(query);
        return debouncedSearch(query);
      }}
      onBlur={(val) => {
        onBlur(val);
      }}
      onSelect={(val) => {
        setPage(1);
        return onSelect(JSON.parse(val));
      }}
      showSearch
      style={{ width: '100%', minWidth: '100px' }}
      placeholder={placeholder}
      onPopupScroll={onDropdownScroll}
    >
      {source.map((option) => (
        <Select.Option
          key={`${option.id}`}
          value={JSON.stringify(option)}
        >
          {renderOption(option)}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SearchAndSelect;
