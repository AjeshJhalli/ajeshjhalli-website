const controls = {
  search: document.querySelector("#search"),
  state: document.querySelector("#state-filter"),
  review: document.querySelector("#review-filter"),
  ci: document.querySelector("#ci-filter"),
  merge: document.querySelector("#merge-filter"),
  sort: document.querySelector("#sort"),
};

const list = document.querySelector("#pull-rows");
const rows = [...document.querySelectorAll(".pull-row")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

function matches(row, key, value) {
  return value === "all" || row.dataset[key] === value;
}

function sortRows(visibleRows) {
  const sort = controls.sort.value;
  const compare = {
    updated: (a, b) => Number(a.dataset.updated) - Number(b.dataset.updated),
    newest: (a, b) => Number(b.dataset.created) - Number(a.dataset.created),
    oldest: (a, b) => Number(a.dataset.created) - Number(b.dataset.created),
    size: (a, b) => Number(b.dataset.size) - Number(a.dataset.size),
  }[sort];

  visibleRows.sort(compare).forEach((row) => list.append(row));
}

function updateList() {
  const query = controls.search.value.trim().toLowerCase();
  const visibleRows = rows.filter((row) => {
    const visible =
      (!query || row.dataset.search.includes(query) || row.textContent.toLowerCase().includes(query)) &&
      matches(row, "state", controls.state.value) &&
      matches(row, "review", controls.review.value) &&
      matches(row, "ci", controls.ci.value) &&
      matches(row, "merge", controls.merge.value);

    row.hidden = !visible;
    return visible;
  });

  sortRows(visibleRows);
  resultCount.textContent = `${visibleRows.length} pull request${visibleRows.length === 1 ? "" : "s"}`;
  emptyState.hidden = visibleRows.length !== 0;
}

Object.values(controls).forEach((control) => {
  control.addEventListener(control.tagName === "INPUT" ? "input" : "change", updateList);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== controls.search) {
    event.preventDefault();
    controls.search.focus();
  }

  if (event.key === "Escape" && document.activeElement === controls.search) {
    controls.search.value = "";
    controls.search.blur();
    updateList();
  }
});
