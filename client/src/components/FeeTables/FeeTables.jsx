import PropTypes from "prop-types";

const earlyRows = [
  { label: "Postdocs / Researchers / Professors", price: "USD 405" },
  { label: "Master / PhD Students", price: "USD 270" },
  { label: "Undergraduate Student", price: "USD 225" },
];

const earlyExtras = [
  { label: "Accompanying", price: "USD 180" },
  { label: "Closing dinner", price: "USD 40" },
];

const lateRows = [
  { label: "Postdocs / Researchers / Professors", price: "USD 450" },
  { label: "Master / PhD Students", price: "USD 300" },
  { label: "Undergraduate Student", price: "USD 250" },
];

const lateExtras = [
  { label: "Accompanying", price: "USD 200" },
  { label: "Closing dinner", price: "USD 40" },
];

function FeeTable({ periodName, periodDates, rows, extras, late }) {
  return (
    <div className="fee-table">
      <div className={`fee-table-period ${late ? "late" : ""}`}>
        <span className="fee-period-name">{periodName}</span>
        <span className="fee-period-dates">{periodDates}</span>
      </div>
      <p className="fee-section-label">By level</p>
      {rows.map((row) => (
        <div key={row.label} className="fee-row">
          <span className="fee-row-label">{row.label}</span>
          <span className="fee-price">{row.price}</span>
        </div>
      ))}
      <p className="fee-section-label">Additional</p>
      {extras.map((row) => (
        <div key={row.label} className="fee-row">
          <span className="fee-row-label">{row.label}</span>
          <span className="fee-price">{row.price}</span>
        </div>
      ))}
    </div>
  );
}

FeeTable.propTypes = {
  periodName: PropTypes.string.isRequired,
  periodDates: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  extras: PropTypes.arrayOf(PropTypes.object).isRequired,
  late: PropTypes.bool,
};

export default function FeeTables() {
  return (
    <div className="fee-tables">
      <FeeTable
        periodName="Early"
        periodDates="Until Aug 18th"
        rows={earlyRows}
        extras={earlyExtras}
      />
      <FeeTable
        periodName="Standard"
        periodDates="From Aug 18th"
        rows={lateRows}
        extras={lateExtras}
        late
      />
    </div>
  );
}
