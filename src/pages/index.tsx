import * as React from "react";
import CardIcon from "@/components/Icons/CardIcon";
import ReloadIcon from "@/components/Icons/ReloadIcon";
import UserIcon from "@/components/Icons/UserIcon";
import Tabs, { TabsType } from "@/components/Tabs/Tabs";
import { PaginationType, SearchedResultType } from "@/types/user";
import SearchIcon from "@/components/Icons/SearchIcon";
import Button from "@/components/Button";
import TabContent from "@/components/Tabs/TabContent";
import LoadingTable from "@/components/LoadingTable";

const tabsArray: TabsType = [
  {
    id: "kit",
    title: "Kit",
    icon: <CardIcon />,
  },
  {
    id: "personalizedSales",
    title: "Personalized Sales",
    icon: <UserIcon />,
  },
  {
    id: "reissue",
    title: "Reissue",
    icon: <ReloadIcon />,
  },
];

const fetchConfig = {
  headers: {
    Authorization:
      "Bearer  eyJraWQiOiJnWlwvclBnV1RLVjBWbUFpWW52WVwvbUNaZUdxNXpHVVJDUWlpU0FUaHZyVjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkiLCJldmVudF9pZCI6IjgyNGVmMzBiLWE3MjQtNDFiNi1hZjI5LWEyYzAzNGNlODE5NSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODgzODM1NDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQlFqQWVQbWVkIiwiZXhwIjoxNjg4NTYzODcxLCJpYXQiOjE2ODg0Nzc0NzEsImp0aSI6IjkxZTkxYmI0LThkMTgtNDk3Ny1iOThkLTU3NTAzMTg4ODFiNiIsImNsaWVudF9pZCI6IjdqOWJyOTIxYWZmMGNzcHNlNnBqaGMydnA3IiwidXNlcm5hbWUiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkifQ.ex6urzex-jxHYf4o0OVrZmE-7eaFP-yV5PMzpGdqmECLvQOsFSf3JYX8vySvE1UtmIx4j7G5kFPOtcrDBOJnZk7CXscQtUCf7VGAFsx8LifarM2eA5-1GoISPjUtaaF2tbU2cvsKTB_lcUJw-Koh3jbTMo_oiZuzn-2ZtT3sZ9ok99uN28k5DPduf3m_J-GnsAtuuq-ns3jCtznxOfDoaVNctmqerwz-yOIhyQWjHnF9WH6yzhcZnoM09dJBv43uIZzE7utMDfzP2Et_MGUohfQspsD1xSZa3fvnEe4RBAHkeUfVaIgDXN985YmVqdPp_fWv3rywz1R8wiydUzcVmA",
    "Content-Type": "application/json",
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("kit");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = React.useState("");
  const [data, setData] = React.useState<SearchedResultType[]>([]);
  const [pagination, setPagination] = React.useState<PaginationType>({
    pageNumber: 0,
    numberOfItems: 0,
    totalPages: 0,
    totalItems: 0,
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState(0);

  const searchUsers = React.useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const payload = {
        value: debouncedSearchQuery,
        branchId: "4ff819ab-00ea-45b8-9544-205407c0680c",
        page: 0,
        pageSize: 50,
      };
      const response = await fetch(
        "https://prod-api.vegapay.tech/forex/account/search",
        {
          ...fetchConfig,
          method: "POST",
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      setData(data.records);
      setPagination({
        pageNumber: data.pageNumber,
        numberOfItems: data.numberOfItems,
        totalPages: data.totalPages,
        totalItems: data.totalItems,
      });
      setLoading(false);
    } catch (e) {
      setError("Something went wrong");
      setLoading(false);
    }
  }, [debouncedSearchQuery]);

  React.useEffect(() => {
    searchUsers();
  }, [searchUsers]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <section className={`min-h-screen space-y-4`}>
      <div className="space-y-4 card">
        <div>
          <h6 className="text-base">New Card Sales</h6>
          <div className="text-sm text-gray-600">Issue New Card</div>
        </div>
        <Tabs
          tabs={tabsArray}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="flex items-center justify-between card">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="block w-full py-2 pl-10 pr-4 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search by Mobile"
          />
        </div>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={searchUsers}
        >
          Search
        </Button>
      </div>
      {loading ? (
        <LoadingTable />
      ) : (
        <>
          {error && (
            <div className="text-xl text-center text-red-500">{error}</div>
          )}
          {data.length > 0 && (
            <TabContent
              data={data}
              pagination={pagination}
              setCurrentPage={setCurrentPage}
              activeTab={activeTab}
            />
          )}
          {data.length === 0 && (
            <div className="text-xl text-center text-gray-400">
              No Data Found
            </div>
          )}
          {}
        </>
      )}
    </section>
  );
}
