export function DefaultExport() {
  return (
    <>
      <h2>This is default export file</h2>
    </>
  );
}

function NamedExport2() {
  return (
    <>
      <h2>This is Named export 2 file</h2>
    </>
  );
}

// export default DefaultExport;
export { NamedExport2 };
