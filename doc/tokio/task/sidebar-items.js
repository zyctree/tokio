initSidebarItems({"fn":[["block_in_place","Run the provided blocking function without blocking the executor."],["spawn","Spawns a new asynchronous task, returning a `JoinHandle` for it."],["spawn_blocking","Run the provided closure on a thread where blocking is acceptable."],["spawn_local","Spawns a `!Send` future on the local task set."],["yield_now","Yield execution back to the Tokio runtime."]],"struct":[["JoinError","Task failed to execute to completion."],["JoinHandle","An owned permission to join on a task (await its termination)."],["LocalKey","A key for task-local data."],["LocalSet","A set of tasks which are executed on the same thread."]]});